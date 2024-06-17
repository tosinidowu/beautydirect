import React, { useState } from "react";
import IGServiceSearch from "./IGServicesSearch";
import ServicerCard from "./ServicerCard";
import "../styling/SearchResults.css"; // Import the CSS file

const SearchResultsPage = ({ servicers }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const sampleServicers = [
        { id: 1, name: "Service One", description: "Description for Service One" },
        { id: 2, name: "Service Two", description: "Description for Service Two" },
        { id: 3, name: "Another Service", description: "Description for Another Service" },
        { id: 4, name: "Another Service", description: "Description for Another Service" },
        { id: 5, name: "Another Service", description: "Description for Another Service" },
        { id: 6, name: "Another Service", description: "Description for Another Service" },
    ];

    const filteredServicers = sampleServicers.filter((servicer) => {
        return (
            servicer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            servicer.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    console.log("Search Term:", searchTerm);
    console.log("Filtered Servicers:", filteredServicers);

    return (
        <div className="search_results_page">
            <h1>Search Results:</h1>
            <div className="search_results">
                {filteredServicers.map((servicer) => (
                    <ServicerCard key={servicer.id} servicer={servicer} />
                ))}
            </div>
        </div>
    );
};

export default SearchResultsPage;
