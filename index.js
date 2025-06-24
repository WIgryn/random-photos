<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Random Pic 🎲📸</title>
  <meta name="description" content="Chaque clic te montre une image totalement aléatoire. Laisse-toi surprendre.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #0e0e0e;
      color: #fff;
      font-family: sans-serif;
      text-align: center;
      margin: 0;
      padding: 0 1rem;
    }

    h1 {
      margin-top: 2rem;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.1rem;
      color: #aaa;
    }

    img {
      margin: 2rem auto;
      max-width: 100%;
      max-height: 70vh;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(255,255,255,0.2);
    }

    button {
      background: #fff;
      color: #000;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      margin: 0.5rem;
      cursor: pointer;
      border-radius: 8px;
      transition: background 0.3s;
    }

    button:hover {
      background: #ddd;
    }

    footer {
      margin: 3rem 0 1rem;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <h1>🎲 Random Pic</h1>
  <p>Découvre une nouvelle image aléatoire à chaque clic.</p>

  <img id="randomImage" src="" alt="Image aléatoire">

  <div>
    <button onclick="loadRandomImage()">Nouvelle image</button>
    <button onclick="shareImage()">Partager</button>
  </div>

  <footer>
    Random Pic – Créé par [Ton Prénom ou Pseudo] © 2025
  </footer>

  <script>
    const images = [
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3",
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5"
    ];

    function loadRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      const img = document.getElementById('randomImage');
      img.src = images[randomIndex] + '&t=' + new Date().getTime(); // évite le cache
    }

    function shareImage() {
      const img = document.getElementById('randomImage');
      navigator.clipboard.writeText(img.src)
        .then(() => alert("Lien copié ! Tu peux le partager."))
        .catch(() => alert("Impossible de copier le lien 😢"));
    }

    window.onload = loadRandomImage;
  </script>
</body>
</html>
