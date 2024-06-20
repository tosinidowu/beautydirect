import react from 'react';
import Header from '../components/Header';
import BusinessSearch from '../components/BusinessSearch';

function BusinessName() {
    return (
        <div className="business_name">
            <Header />
            <BusinessSearch />
        </div>
    );
}

export default BusinessName;
