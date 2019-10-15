import { program as Program } from '../models/data.json'; 

const seed = "nice seed!!!!";



const colorClasses = ['room-header-green', 'room-header-purple', 'room-header-red', 'room-header-yellow'];

const colorClassFromRoomName = roomName => {
    const index = Math.abs(Program.rooms.indexOf(roomName) % colorClasses.length);
    return colorClasses[index];
}

// Should be tweaked to create more "nice" colors
const colorFromRoomName = roomName => {
    const str = roomName + seed + roomName; // Room names tend to be quite short so we put multiple of them togheter
    let hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return colorMinumum("#" + "00000".substring(0, 6 - c.length) + c, [130, 120, 90]);
}

// Makes r, g and b has atleast a minimum value
const colorMinumum = (color, min: number[]) => {
    const c = color.substring(1, color.length);
    const rgb = c.match(/.{1,2}/g).map(i => parseInt(i, 16)).map((i, j) => Math.max(i, min[j])).map(i => i.toString(16).toUpperCase());
    return "#" + rgb.map(i => ("0" + i).substr(-2)).join('');
}

export { colorFromRoomName, colorClassFromRoomName };