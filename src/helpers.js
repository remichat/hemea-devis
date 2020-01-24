const transposeLotsToLocations = (locations, lots) => {
  locations.forEach((location) => {
    location.prixTotalHT = 0;
    location.lignes = [];
  })

  lots.forEach((lot) => {
    lot.lignes.forEach((ligne) => {
      if(ligne.locationsDetails.locations.length > 0) {
        ligne.locationsDetails.locations.forEach((location) => {
          const foundLocation = locations.find(loc => loc.uuid === location.uuid);
          const prixUnitaire = parseInt(ligne.prixUnitaireHT);
          const quantite = parseInt(location.quantite);
          const prixTotal = prixUnitaire * quantite
          foundLocation.prixTotalHT += prixTotal
          foundLocation.lignes.push(
            {
              designation: ligne.designation,
              prixUnitaireHT: prixUnitaire,
              quantite: quantite,
              prixTotalHT: prixTotal
            }
          )
        })
      } else {
        const foundLocation = locations.find(loc => loc.label === "Autres");
        if(foundLocation) {
          foundLocation.prixTotalHT += parseInt(ligne.prixHT);
          foundLocation.lignes.push(ligne)
        } else {
          locations.push({
            label: "Autres",
            prixTotalHT: parseInt(ligne.prixHT),
            lignes: [ligne]
          })
        }
      }
    })
  })

  return locations;
}

export { transposeLotsToLocations };
