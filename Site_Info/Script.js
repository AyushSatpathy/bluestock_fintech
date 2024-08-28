// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fetchIPOData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/ipos/');
            const data = await response.json();

            if (data.length > 0) {
                const ipoData = data[0];  // Assuming you want to display the first IPO

                document.querySelector('.company-name').textContent = ipoData.company_name;
                document.querySelector('.ipo-details').innerHTML = `
                    <p><strong>Price Band:</strong> ${ipoData.price_band}</p>
                    <p><strong>Open Date:</strong> ${ipoData.open_date}</p>
                    <p><strong>Close Date:</strong> ${ipoData.close_date}</p>
                    <p><strong>Issue Size:</strong> ${ipoData.issue_size}</p>
                    <p><strong>Issue Type:</strong> ${ipoData.issue_type}</p>
                    <p><strong>Listing Date:</strong> ${ipoData.listing_date}</p>
                    <p><strong>Status:</strong> ${ipoData.status}</p>
                    <p><strong>IPO Price:</strong> ₹${ipoData.ipo_price}</p>
                    <p><strong>Listing Price:</strong> ₹${ipoData.listing_price}</p>
                    <p><strong>Listing Gain:</strong> ${ipoData.listing_gain}%</p>
                    <p><strong>Current Market Price (CMP):</strong> ₹${ipoData.current_market_price}</p>
                    <p><strong>Current Return:</strong> ${ipoData.current_return}%</p>
                `;
            } else {
                document.querySelector('.ipo-details').innerHTML = `<p>No IPO data available.</p>`;
            }
        } catch (error) {
            console.error('Error fetching IPO data:', error);
        }
    };
    
    fetchIPOData();
});
