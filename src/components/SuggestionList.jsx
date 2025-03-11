import React from "react";
import SuggestionCard from "./SuggestionCard";

const suggestions = [
  {
    id: 1,
    name: "Netflix Premium",
    price: 17.99,
    description: "Accès en ultra HD sur 4 écrans simultanés.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    link: "https://www.netflix.com"
  },
  {
    id: 2,
    name: "Spotify Family",
    price: 14.99,
    description: "Jusqu'à 6 comptes Premium pour la famille.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Spotify_logo_with_text.svg",
    link: "https://www.spotify.com"
  },
  {
    id: 3,
    name: "Amazon Prime",
    price: 6.99,
    description: "Livraison rapide + accès Prime Video et Music.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Amazon_Prime_logo.svg",
    link: "https://www.amazon.com/amazonprime"
  }
];

const SuggestionList = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Suggestions d'Abonnements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {suggestions.map((suggestion) => (
          <SuggestionCard key={suggestion.id} {...suggestion} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionList;
