

function capturaPost() {
const tituloPost = document.getElementById("titulo-post");
const autorPost =  document.getElementById("autor-post");
const conteudoPost = document.getElementById("conteudo-post");
const containerPosts = document.getElementById("container-de-posts")
const arrayPosts = [];

const postagem = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,

}
arrayPosts.push(postagem);
console.log(arrayPosts)
containerPosts.innerHTML += `<p>${tituloPost.value}</p><p>${autorPost.value}</p><p>${conteudoPost.value}</p>`

tituloPost.value= "";
autorPost.value= "";
conteudoPost.value="";
}

