// This is a JavaScript file
function funcao(){

  var idade = parseInt(document.getElementById("idade").value);
  var nome = document.getElementById("nome").value;

  let img = document.createElement('img')
  img.src = "https://super.abril.com.br/wp-content/uploads/2016/12/18-blog.jpg?quality=70&strip=all";
  img.style = " width: 100vw";

  let img2 = document.createElement('img')
  img2.src = "https://vievino.com.br/wp-content/themes/Vievino_Maiscode/img/dezoito.jpg";
  img2.style = "width: 100vw";

  if(idade > 18){
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh; font-family: Helvetica;'>"+nome+", você é maior de idade!</h1><br>");
    document.body.appendChild(img);

  }else{
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh; font-family: Helvetica;'>"+nome+", você é menor de idade!</h1><br>");
    document.body.appendChild(img2);
  }
}
