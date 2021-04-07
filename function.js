//--------------------------------------------------------------------------------//
//Costume function zone
//--------------------------------//
function needs( color )
{
    if( frameCount===1 )
    {
        Log( "Log" , "Starting up the loop" );
    }
    background( color );
    drawSprites(); 
}
//--------------------------------//
//quick console
function Log( type , message )
{
    var VAl = type.toLowerCase();
    switch ( VAl ) {
        case "log":
            console.log( message );
            break;

        case "warn":
            console.warn( message );
            break;

        case "error":
            console.error( message );
            break;

        default:
            console.error( "message 'function' has invaid first value, the possible values are 'log', 'warn' & 'error'." );
    }
}
//--------------------------------//
//quick dialog
function dialog( type , message )
{
    var VAl = type.toLowerCase();
    switch ( VAl ) {
        case "alert":   
            alert( message );
            break;

        case "confirm":
            confirm( message );
            break;

        case "prompt":
            prompt( message );
            break;
    
        default:
            console.error( "message 'dialog' has invaid first value, the possible values are 'alert', 'prompt' & 'confirm'." );
            break;
    }
}
//--------------------------------//
//quick text maker
function Strin( Text , x , y , size , color )
{
    push();
    fill( color );
    textSize( size );
    text( Text , x , y );
    pop();
}
//--------------------------------//
//--------------------------------------------------------------------------------//