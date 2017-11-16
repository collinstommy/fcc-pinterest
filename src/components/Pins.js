import React from 'react';

const Pins = ({ pins }) => {
    return  <div className="container">
          <div className="columns is-multiline">
            { /* Render the list of messages */
              this.state.pins.map(pin =>
                <PinItem key={pin.id}
                  imgUrl={pin.imgUrl}
                  title={pin.title}
                  description={pin.description}
                  userId={pin.userId}
                  displayName={pin.displayName} >
                </PinItem>)
            }
          </div>
        </div>
}