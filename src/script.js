
var urls = {
    voxels: 'http://localhost:8081',
    music1: 'http://localhost:8082',
    music2: 'http://localhost:8082',
    music3: 'https://github.com/andyhall/webaudio-music/',
    other: './static/demos/offline',
}

var targets = {
    voxels: 'voxel_demo',
    music1: 'music_demo',
    music2: 'music_demo',
    music3: '_blank',
    other: '_blank',
}


window.demo = function (str) {
    // hack to see if I'm running locally on my machine
    var local = window.location.toString().includes('localhost')
    if (!local) str = 'other'
    var url = urls[str] || urls.other
    var tgt = targets[str] || targets.other
    window.open(url, tgt)
    return false
}

