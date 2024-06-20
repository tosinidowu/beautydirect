import react from 'react';
import Header from '../components/Header';
import BusinessEmail from '../components/BusinessEmail';

function ProvideBusinessEmail() {
    return (
        <div className="provide_business_email">
            <Header />
            <BusinessEmail />
        </div>
    );
}

export default ProvideBusinessEmail;