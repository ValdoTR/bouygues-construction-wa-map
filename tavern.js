const zoneList = {
    popupBar: {
        message: 'Holà amigos ! Je vous sers un Green Martini ou un Red Mojito ?', 
        buttons: [
            {
                label: "Green Martini",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://www.ateliersetsaveurs.com/les-recettes/cocktails/detail/981/green-martini');
                    popupValue.close();
                }
            },
            {
                label: "Red Mojito",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://www.750g.com/mojito-r99211.htm');
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
