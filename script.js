const resimEl = document.getElementsByTagName("img")[0];

const geriDugmesi = document.getElementById("geri");

const ileriDugmesi = document.getElementById("ileri");

const resimNumarasiEl = document.getElementsByTagName("span")[0];

console.log(resimEl, ileriDugmesi, geriDugmesi, resimNumarasiEl);

let resimNumarasi = 0;

const resimDizisi = [
  "https://images.unsplash.com/photo-1516091877740-fde016699f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80",
  "https://images.unsplash.com/photo-1579264670959-286d7b06f1ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1894&q=80",
  "https://images.unsplash.com/photo-1568062442124-a5ddb0b82fc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80",
  "https://images.unsplash.com/photo-1530736822234-c8562cb0a710?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1590169890394-67f4d99a0545?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1568518988484-a4cd9667bd80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1576402428860-746188f839d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
  "https://images.unsplash.com/photo-1558528909-66a2cffd8ce1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1579264670612-6eb62a173aec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1580211337411-b1c777ea72a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

console.log(resimDizisi.length);

geriDugmesi.addEventListener("click", () => {
  resimNumarasi--;
  if (resimNumarasi < 0) resimNumarasi = resimNumarasi + 10;
  resimNumarasiEl.innerHTML = resimNumarasi + 1;
  resimEl.src = resimDizisi[resimNumarasi];
  console.log(resimNumarasi);
});

ileriDugmesi.addEventListener("click", () => {
  resimNumarasi++;
  resimNumarasi = resimNumarasi % 10;
  resimNumarasiEl.innerHTML = resimNumarasi + 1;
  resimEl.src = resimDizisi[resimNumarasi];
  console.log(resimNumarasi);
});
