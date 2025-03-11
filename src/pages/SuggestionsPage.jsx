import React from "react";
import { FaRegLightbulb, FaStar, FaCheckCircle } from "react-icons/fa";

const suggestions = {
  free: [
    { id: 1, name: "YouTube", description: "Vidéos gratuites", rating: 4.7, devices: ["Web", "Mobile", "TV"], logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_square_%282017%29.svg", link: "https://www.youtube.com" },
    { id: 2, name: "Spotify Free", description: "Musique avec pub", rating: 4.5, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", link: "https://www.spotify.com" },
    { id: 3, name: "LibreOffice", description: "Suite bureautique", rating: 4.6, devices: ["PC"], logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/LibreOffice_Logo.svg", link: "https://www.libreoffice.org" },
    { id: 4, name: "Canva Free", description: "Création graphique", rating: 4.4, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Canva_logo.svg", link: "https://www.canva.com" },
    { id: 5, name: "GIMP", description: "Édition d’images", rating: 4.3, devices: ["PC"], logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg", link: "https://www.gimp.org" },
    { id: 6, name: "Audacity", description: "Édition audio", rating: 4.2, devices: ["PC"], logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Audacity_Logo.svg", link: "https://www.audacityteam.org" },
  ],
  cheap: [
    { id: 7, name: "Amazon Prime", price: "6,99€/mois", description: "Livraison + Vidéo", rating: 4.6, devices: ["Web", "Mobile", "TV"], logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", link: "https://www.amazon.com/prime" },
    { id: 8, name: "Disney+", price: "8,99€/mois", description: "Disney, Marvel & plus", rating: 4.8, devices: ["Web", "Mobile", "TV"], logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg", link: "https://www.disneyplus.com" },
    { id: 9, name: "Canva Pro", price: "11,99€/mois", description: "Outils avancés", rating: 4.7, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Canva_logo.svg", link: "https://www.canva.com" },
    { id: 10, name: "Microsoft 365", price: "7,00€/mois", description: "Suite bureautique", rating: 4.5, devices: ["PC", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://www.microsoft.com" },
    { id: 11, name: "Hulu", price: "7,99€/mois", description: "Séries & films", rating: 4.5, devices: ["Web", "Mobile", "TV"], logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg", link: "https://www.hulu.com" },
    { id: 12, name: "Notion Plus", price: "8,00€/mois", description: "Outils de productivité", rating: 4.7, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg", link: "https://www.notion.so" },
  ],
  popular: [
    { id: 13, name: "Netflix", price: "17,99€/mois", description: "Films & séries HD", rating: 4.9, devices: ["Web", "Mobile", "TV"], logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg", link: "https://www.netflix.com" },
    { id: 14, name: "Spotify Premium", price: "9,99€/mois", description: "Musique illimitée", rating: 4.7, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", link: "https://www.spotify.com" },
    { id: 15, name: "Adobe CC", price: "23,99€/mois", description: "Design pro", rating: 4.6, devices: ["PC", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Corporate_Logo.svg", link: "https://www.adobe.com" },
    { id: 16, name: "Apple Music", price: "10,99€/mois", description: "Musique HD", rating: 4.8, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Apple_Music_logo.svg", link: "https://www.apple.com/music" },
    { id: 17, name: "Google One", price: "9,99€/mois", description: "Stockage Cloud", rating: 4.6, devices: ["Web", "Mobile"], logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Google_One_logo.svg", link: "https://one.google.com" },
    { id: 18, name: "Xbox Game Pass", price: "12,99€/mois", description: "Jeux illimités", rating: 4.7, devices: ["PC", "Console"], logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_Game_Pass_logo.svg", link: "https://www.xbox.com" },
  ],
};

const SuggestionCard = ({ name, price, description, rating, devices, logo, link }) => (
  <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center text-center w-full max-w-[250px] transition transform hover:shadow-md">
    <img src={logo} alt={name} className="h-14 mb-3" loading="lazy" />
    <h3 className="text-base font-semibold text-gray-900">{name}</h3>
    {price && <p className="text-blue-600 font-bold text-sm mt-1">{price}</p>}
    <p className="text-gray-600 text-xs mt-1">{description}</p>
    <div className="flex items-center gap-1 mt-2 text-yellow-500 text-xs">
      <FaStar /> {rating.toFixed(1)}
    </div>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-3 px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-md shadow-md hover:bg-blue-700 transition duration-300 w-full"
    >
      Voir
    </a>
  </div>
);

const SuggestionsPage = () => (
  <div className="max-w-6xl mx-auto space-y-10 px-6 py-8">
    {/* En-tête */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800">Meilleures Alternatives</h2>
      <p className="text-gray-600 text-sm mt-2">Trouvez la solution qui s'adapte à votre budget.</p>
    </div>
    
    {/* Section informative */}
    <div className="bg-yellow-50 border-l-4 border-yellow-500 shadow-sm rounded-lg p-4 text-center flex items-center justify-center">
      <FaRegLightbulb className="text-2xl text-yellow-500 mr-2" />
      <p className="text-gray-700 text-sm">Découvrez des alternatives gratuites ou abordables.</p>
    </div>

    {/* Catégories */}
    {Object.entries(suggestions).map(([category, items]) => (
      <div key={category} className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {category === "free" ? "🆓 Abonnements Gratuits" :
           category === "cheap" ? "💸 Abonnements Moins Chers" :
           "🔥 Abonnements Populaires"}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <SuggestionCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    ))}

    {/* Bouton Voir Plus */}
    <div className="flex justify-center mt-8">
      <a 
        href="/abonnements" 
        className="px-5 py-2 text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
      >
        Plus d'options →
      </a>
    </div>
  </div>
);

export default SuggestionsPage;
