import React from "react";


function Footer() {

    const currentYear = new Date().getFullYear();
    
    return (
    <footer>
        <text>Copyright © {currentYear}</text>
    </footer>
    );
}

export default Footer