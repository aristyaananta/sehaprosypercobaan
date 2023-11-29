let btn = document.getElementById("btn");
let output = document.getElementById("output");
let tokoh = document.getElementById("tokoh");
let quotes = [
  '"Berpikirlah positif, tidak peduli seberapa keras kehidupanmu."<br/><span>Ali bin Abi Thalib</span>',
  '"Saat kau melakukan sesuatu yang mulia dan indah tapi tak ada yang memperhatikan, jangan bersedih. Karena matahari pun tampil cantik setiap pagi meski sebagian besar penontonnya masih tidur."<br/><span>John Lennon</span>',
  '"Hidup itu sederhana, kita yang membuatnya sulit."<br/><span>John Lennon</span>',
  '"Trauma menciptakan perubahan yang tidak kamu pilih. Penyembuhan adalah tentang menciptakan perubahan yang kamu pilih."<br/><span>Michelle Rosenthal</span>',
  '"Alih-alih malu dengan apa yang telah kamu lalui, banggalah dengan apa yang telah kamu atasi."<br/><span>Dr Phil</span>',
  '"Hadapi kenyataan apa adanya, bukan seperti itu atau seperti yang Anda inginkan."<br/><span>Jack Welch</span>',
  '"Angin tidak berhembus untuk menggoyangkan pepohonan, melainkan menguji kekuatan akarnya."<br/><span> Ali bin Abi Thalib</span>',
  '"Keberanian adalah yang paling penting dari semua kebajikan karena tanpa keberanian, Anda tidak dapat mempraktikan kebajikan lainnya secara konsisten."<br/><span>Maya Angelou</span>',
  '"Setiap fase yang kamu jalani harus bisa mendatangkan pelajaran untuk naik ke fase berikutnya."<br/><span>Merry Riana</span>',
  '"Satu-satunya hal yang harus kita takuti adalah ketakutan itu sendiri."<br/><span>Franklin D. Roosevelt</span>',
  '"Teruslah tersenyum, karena hidup itu indah dan ada banyak hal yang bisa disyukuri."<br/><span>Marilyn Monroe</span>',
  '"Ingat tidak ada yang bisa membuat Anda merasa rendah diri tanpa persetujuan Anda." <br/><span>Eleanor Roosevelt</span>',
  '"Matahari pun memiliki sinar yang redup saat pertama kali muncul di ufuk timur, namun semakin lama semakin kuat cahayanya seiring berjalannya hari."<br/><span>Charles Dickens</span>',
  '"Jangan berdoa untuk kehidupan yang mudah, doakanlah kekuatan untuk menanggung kehidupan yang sulit."<br/><span>Bruce Lee</span>',
  '"Jadilah diri Anda sendiri. Tidak akan ada satupun orang yang akan menyalahkan Anda."<br/><span>Charles Schultz</span>',
];

let author = ["<style>.quote-box #tokoh::before {content:none;}</style>"];

btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
  tokoh.innerHTML = author;
});
