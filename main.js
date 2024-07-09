let gambarArray = [
    { backgroundColor: 'gray', borderRadius: '0' }
];

let urutan = 0;

function ubahGambar() {
    urutan = (urutan + 1) % gambarArray.length;
    const elemenGambar = document.getElementById('gambar');
    const gambarBerikutnya = gambarArray[urutan];
    elemenGambar.style.backgroundColor = gambarBerikutnya.backgroundColor;
    elemenGambar.style.borderRadius = gambarBerikutnya.borderRadius;
}

function ubahwarna() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    gambarArray = [
        { backgroundColor: 'gray', borderRadius: '0' },
        { backgroundColor: color1, borderRadius: '50%' },
        { backgroundColor: color2, borderRadius: '0' },
        { backgroundColor: color3, borderRadius: '50%' }
    ];

    urutan = 0;
    const elemenGambar = document.getElementById('gambar');
    elemenGambar.style.backgroundColor = gambarArray[0].backgroundColor;
    elemenGambar.style.borderRadius = gambarArray[0].borderRadius;
}

function masuk() {
    const button = document.getElementById('submit');
    button.style.backgroundColor = 'yellow';
}

function keluar() {
    const button = document.getElementById('submit');
    button.style.backgroundColor = '';
}
