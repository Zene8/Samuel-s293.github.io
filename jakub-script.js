document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('home-tab2').addEventListener('click', function() {
        document.getElementById('content-title').innerText = 'Healthcare';
        document.getElementById('content-text').innerText = 'Computer science plays a transformative role in healthcare, enabling doctors and researchers to tackle complex medical challenges. Through data science and machine learning, vast quantities of patient data can be analyzed to detect patterns, predict diseases, and personalize treatment. For example, machine learning algorithms are used to identify abnormalities in medical imaging, such as X-rays or MRIs, aiding radiologists in diagnosing conditions with greater accuracy. Furthermore, electronic health records (EHRs) make patient data accessible and organized, allowing healthcare professionals to make more informed decisions and streamline patient care.';
    });

    document.getElementById('profile-tab2').addEventListener('click', function() {
        document.getElementById('content-title').innerText = 'Finance';
        document.getElementById('content-text').innerText = 'In finance, computer science is essential for handling massive amounts of transaction data and assessing risks. Algorithms in this field process real-time data, identifying trends and enabling financial institutions to detect and prevent fraudulent transactions. High-frequency trading relies on complex algorithms to make instant decisions based on market conditions, allowing firms to maximize profits. Additionally, financial forecasting and predictive modeling use computer science to provide insights into market movements, guiding investors and helping companies make data-driven financial decisions, especially in the stock market and investment management.';
    });

    document.getElementById('contact-tab2').addEventListener('click', function() {
        document.getElementById('content-title').innerText = 'Science';
        document.getElementById('content-text').innerText = 'Computer science also revolutionizes environmental science, where data analytics and simulations are used to study ecosystems and predict environmental changes. For instance, climate models rely on algorithms to simulate future climate scenarios based on greenhouse gas emissions, helping scientists and policymakers prepare for potential impacts. Geographic Information Systems (GIS), another computer-based technology, help in mapping environmental features and analyzing spatial data to track deforestation, wildlife populations, and water quality. By enabling faster and more accurate analysis, computer science helps environmentalists make informed decisions that can lead to better conservation efforts and a more sustainable future.';
    });
});
