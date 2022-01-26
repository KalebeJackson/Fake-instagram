const post = `
<main class="container content">
<div class="card" id="">
<div class="card-header">
<div>
  <img class="avatar" src="/img/avatar-example.png">
  <b>Ana Paula</b>
</div>
<img src="/img/icons/more-vertical.svg">
</div>
<div class="card-img">
<img src="/img/publication_example.jpg">
</div>
<div class="card-body">
<div class="card-itens">
  <div class="likes">
    <img src="/img/icons/heart.svg" width="24px">
    <b>1 likes</b>
  </div>
  <b>Postado no dia: 00/00/0000</b>
</div>
<div class="card-comments">
  <p><b>Nome comentarista</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  </p>
</div>
</div>
<form class="form-comments" action="/comentar" method="post">
<input type="text" hidden name="postId" value="">
<input type="text" placeholder="Adicione um comentário..." name="description">
<button type="submit">Comentar</button>
</form>
</div>
`;

const branco = "http://127.0.0.1:5501/img/icons/heart.svg";
const vermelho = "http://127.0.0.1:5501/img/red-heart.png";

const btnVerMais = document.getElementById("more");
const mainTag = document.querySelector("main");
const btnCoracao = document.querySelector(".likes img");
const like = document.querySelector('.likes')
const form = document.querySelector("form");


btnVerMais.onclick = () => {
  mainTag.removeChild(btnVerMais);
  mainTag.innerHTML += post;
  mainTag.appendChild(btnVerMais);
};

form.addEventListener("mouseover", function () {
  form.style.boxShadow = "0px 1px 3px black";
});

form.addEventListener("mouseout", function () {
  form.style.boxShadow = "none";
});

btnVerMais.addEventListener("mouseover", function () {
  btnVerMais.style.cursor = "pointer";
});

btnCoracao.addEventListener("click", function () {
  if (this.src === branco) {
    like.addEventListener('click', function(){
      const pegar = document.querySelector('.likes b')
      pegar.innerText = '2 Likes'
  })
    this.src = vermelho;
  } else {
    like.addEventListener('click', function(){
      const pegar = document.querySelector('.likes b')
      pegar.innerText = '1 Like'
  })
    this.src = branco;
  }
});

