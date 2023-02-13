import { Heading} from "../../ui/ui";
import MenuItemCard from "./MenuItemsCard";

import { useState } from "react";

export default function AdminPage(){
    const [showAlert, setShowAlert] = useState({
        display: false, 
        type: '',
        message: ''
    });

    function displayAlert(message, type){
        setShowAlert({
            display: true, 
            message: message, 
            type: type
        })
    }

    function clearAlert(){
        setTimeout(()=>{
            setShowAlert({
                display: false, 
                type: '',
                message: ''
            })
        }, 3000);
    }
    
    // Styling object
    const styles = {
        gridStyle: {
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            padding: '2rem',
            height: '20rem', 
            gap: '2rem'
        },
        
    }

    return (
        <div id="admin-page">
            {/* Needs to be implemented fully once other features are working properly */}
            <div style={{margin: 'auto', width: '80rem', paddingTop: '3rem'}}>
                <div className="card-light" style={{ minHeight: '16rem'}}>
                    {/* Displays User-Related Data */}
                    <Heading>User Statistics</Heading>
                </div>
            </div>

            <div style={styles.gridStyle}>
                <MenuItemCard 
                    showAlert={showAlert}
                    displayAlert={displayAlert}
                    clearAlert={clearAlert}
                />
                
                {/* <div className="card-light" style={styles.columnAlignment}> */}
                    {/* Add/Remove Users section */}
                {/* </div> */}
                {/* <div className="card-light" style={styles.columnAlignment}> */}
                    {/* User Queries section */}
                {/* </div> */}
            </div>
        </div>
    )
}