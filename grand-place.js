const zoneList = {
    popupWokaGreenman: {
        message: 'Est-ce que tu es prêt à relever des défis Carbone ?', 
        buttons: [
            {
                label: "Je me déglonfe",
                className: "popUpElement",
                callback: (popupValue) => {
                    popupValue.close();
                }
            },
            {
                label: "Même pas peur",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://lizz06.github.io/bouygues-construction-wa-map/src/random-ask.html');
                    popupValue.close();
                }
            },
        ]
    },
    popupWokaCarboman: {
        message: 'Tu aimes le challenge et tu veux participer à un jeu concours ?', 
        buttons: [
            {
                label: "Non, c’est pas pour moi",
                className: "popUpElement",
                callback: (popupValue) => {
                    popupValue.close();
                }
            },
            {
                label: "Je participe et je gagne !",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://forms.office.com/Pages/ResponsePage.aspx?id=g5k9SjbpN0iVUp2RJqkusPfMPjMRXWZPpk05yRukMYVUQkNLUUEwU0VGVE1FNkxBMlBFUUhMNlFSOS4u&embed=true');//lien microsoft
                    popupValue.close();
                }
            },
        ]
    },
    popupWokaEarthman: {
        message: 'Est-ce que tu veux calculer ton empreinte carbone ?', 
        buttons: [
            {
                label: "Non, j’ai trop peur du résultat",
                className: "popUpElement",
                callback: (popupValue) => {
                    popupValue.close();
                }
            },
            {
                label: "Connaitre mon empreinte carbone",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://nosgestesclimat.fr/simulateur/bilan');
                    popupValue.close();
                }
            },
        ]
    },
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const index = zoneListArray[i];
    let popup = null;
    WA.onEnterZone(index, () => {
        popup = WA.openPopup(`${index}`, zoneList[index].message, zoneList[index].buttons);
    });
    WA.onLeaveZone(index, () => {
        popup.close();
        WA.closeCoWebSite();
    });
}
