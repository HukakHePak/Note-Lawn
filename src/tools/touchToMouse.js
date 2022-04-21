export function touchToMouse(callback) { // make doubleclick handler
    // 
    
    return (event) => {
        
        const touch = event.touches[0];
        
        for( let i in event ) {
            touch[i] = event[i];
        }

        console.log(touch);
        //callback({ ...event, ...touch });
    }
    // return ;
}