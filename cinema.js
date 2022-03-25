const zoneList = {
    popupCinema1: {
        message: 'Notre ambition Carbone ', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/462542686');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema2: {
        message: 'Une histoire d\'enfants', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/560887672');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema3: {
        message: 'Intégrateur de solutions bas carbone', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/559921398');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema4: {
        message: 'Stratégie Climat de Bouygues Construction par Philippe Bonnave ', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/559922952');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema5: {
        message: 'Une journée bas carbone sur chantier', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/559924394');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema6: {
        message: 'A W Edwards s\'engage pour le Climat, avec Greg d\'Arcy', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/559945803');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema7: {
        message: 'Bouygues Turkmen s\'engage pour le Climat, avec Alexei Rechov', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/558515739');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema8: {
        message: 'Dragages Hong Kong s\'engage pour le Climat', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/559948567');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema9: {
        message: 'Dragages Singapour agit pour le Climat', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/558515879');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema10: {
        message: 'AMERICARIBE agit pour le Climat', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/558516146');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema11: {
        message: 'BYMARO agit pour le climat', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/560811078');
                    popupValue.close();
                }
            },
        ]
    },
    popupCinema12: {
        message: 'Bouygues Bâtiment International Cuba agit pour le Climat ', 
        buttons: [
            {
                label: "Voir le film",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://player.vimeo.com/video/558515161');
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
