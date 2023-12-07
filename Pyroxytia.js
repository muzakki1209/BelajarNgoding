let nama = 'Riyuuki'
let role = 'Wizard'

if(nama ==''){
    console.log('Mohon masukkan Nama Anda')
}

if(nama!='' && role =='Knight'){
    console.log('Halo Knight',nama, 'kamu dapat menyerang dengan senjata mu')
}
else if(nama!='' && role =='Priest'){
    console.log('Halo Priest',nama, 'kamu dapat membantu teman-teman mu')
}
else if(nama!='' && role =='Wizard'){
    console.log('Halo Wizard',nama, 'kamu dapat membuat sebuah keajaiban')
}
else if(nama!='' && role ==''){
    console.log('Halo',nama, 'Kerana lu nggak milih peran lu jadi NPC')
}
