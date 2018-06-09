var fsp = require(`./fileIO`);

var writeData = "Spicy jalapeno bacon ipsum dolor amet spare ribs pork loin meatball, pancetta doner venison sirloin pork t-bone sausage buffalo bresaola. Spare ribs buffalo prosciutto burgdoggen picanha.";

var appendData = "Cupcake ipsum dolor sit amet I love dragée donut candy. Jelly beans sweet roll jelly-o powder sweet. Jelly liquorice biscuit pastry.";

fsp.readFile('lorem.txt')
  .then(function(data) {
    console.log("read data",data);
  })
  .catch(function(err) {
    console.error("read err",err);
  });

fsp.writeFile('dummy.txt', writeData)
  .then(function(res) {
    console.log("write data",res);
  })
  .catch(function(err) {
    console.error("write err",err);
  });

fsp.appendFile('lorem.txt', appendData)
  .then(function(res) {
    console.log("append data",res);
  })
  .catch(function(err) {
    console.error("append err",err);
  });
