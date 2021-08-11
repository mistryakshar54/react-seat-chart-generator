# Seat-Chart-Generator

Seat-Chart-Generator is a seat chart app made in React, an inspiration from  [jQuery Seat Charts](https://github.com/mateuszmarkowski/jQuery-Seat-Charts) and a react version of my [ previous library created in Angluar 6 ](https://github.com/mistryakshar54/angular-seat-charts)

<!-- ## Demo Link
[Bus Seat Layout](https://stackblitz.com/edit/bus-seat-chart-layout?file=src/app/app.component.ts) \
[Hall/Theatere Layout](https://stackblitz.com/edit/hall-seat-chart-layout?file=src/app/app.component.ts) -->
## Dependencies 
[Bootstrap](https://getbootstrap.com/) \
[React-bootstrap](https://react-bootstrap.github.io/)

## Basic Setup Example
### **Generating the seats**

```

//Sample JSON for seatConfig
    
    {
        "sectionTitle": "W-Z", //Title of your section
        "seatPrice": 1500,     // Price of all the rows in this section
        "seatMap": [
            {
                "seatLabel": "Z",
                "layout": "________________eeeeeeeeeeeeeeeeeeeeeeeeee_____________________" //Can be any character
            },
            {
                "seatLabel": "Y",
                "layout": "_______________eeeeeeeeeeeeee_eeeeeeeeeeeeee___________________"
            },
            {
                "seatLabel": "X",
                "layout": "___________ee__eeeeeeeeeeeeee_eeeeeeeeeeeeee__eee______________"
            },
            {
                "seatLabel": "W",
                "layout": "___________ee__eeeeeeeeeeeeee_eeeeeeeeeeeeeee_eee______________"
            }
        ]
    }

```

### **"seatMap" : []**
The array that contains the "seatLabel" for each row and the corresponding layout for that row is defined in the "layout" property.

### **"layout" : "__eeeeee__"**

A seat is defined using 'e' or any other character and a space is defined using '_' character in the layout property. 

### **"seat_price" : 1500**

Defines the price for each "seatMap[]".

## **Generate the seat layout**
Pass the configured **seatConfig** JSON to the processSeatChart() function.
```
this.seatConfig = [
      {
        "seat_price": 250,
        "seat_map": [
          {
            "seat_label": "1",
            "layout": "g_____"
          },
          {
            "seat_label": "2",
            "layout": "gg__gg"
          }
        ]
      }
    ];    
    this.processSeatChart(this.seatConfig);
```
 
## **Block Seats**
Want to block seats beforehand?
Pass in a string of comma separated seat-ids to bookedSeats variable in `SeatCart.tsx` component.
```bookedSeats
    const bookedSeats = 'AA_1,AA_2,AA_3,W_1,W_2';
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)