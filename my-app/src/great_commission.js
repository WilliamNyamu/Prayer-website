function Great(props){
    // const date = new Date()
    return (
        <div className="great">
            <div className="great_card">
                <img src= {props.image} className="docket_img" alt="#"/>
                <p className="details">{props.details}</p>
                <p className="location"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5D0E07"><path d="M480-307q96-79 144-151.5t48-135.1q0-86.68-53.5-142.54Q565-792 480-792t-138.5 56Q288-680 288-594.06 288-532 336-460t144 153Zm0 91Q346-317 281-410.61q-65-93.6-65-183.39 0-118.01 73.56-194 73.56-76 190.5-76t190.44 76Q744-712.01 744-594q0 89.79-65 183.39Q614-317 480-216Zm.21-312Q510-528 531-549.21t21-51Q552-630 530.79-651t-51-21Q450-672 429-650.79t-21 51Q408-570 429.21-549t51 21ZM216-96v-72h528v72H216Zm264-504Z"/></svg>{props.location}</p>
                <h5 className="time_details"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z"/></svg>{props.time_details}</h5>
            </div>
        </div>

    );
}
export default Great;