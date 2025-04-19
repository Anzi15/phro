{/* 
          <PayPalScriptProvider options={{ "client-id": paypalClientId, currency: "USD" }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: selectedAmount.toString()
                }
              }]
            })
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(details => {
              alert(`Donation successful! Thank you, ${details.payer.name.given_name}`)
            })
          }}
        />
      </PayPalScriptProvider> */}