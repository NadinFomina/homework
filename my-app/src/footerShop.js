import React from 'react'
import './style.css'
export default function Footer() {
    return (
        <footer className="page-footer teal lighten-1">
            <div className="container">
                © {new Date().getFullYear()} My First Shop
            </div>
        </footer>
    );
}