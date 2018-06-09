var fsp = require(`./file_io`);

fsp.readFile('lorem.txt')
  .then(function(data) {
    console.log("read data",data);
  })
  .catch(function(err) {
    console.error("read err",err);
  });

fsp.writeFile('lorem.txt', 'Spicy jalapeno bacon ipsum dolor amet spare ribs pork loin meatball, pancetta doner venison sirloin pork t-bone sausage buffalo bresaola. ')
  .then(function(res) {
    console.log("write res",res);
  })
  .catch(function(err) {
    console.error("write err",err);
  });

fsp.appendFile('lorem.txt', 'Spare ribs buffalo prosciutto burgdoggen picanha.')
  .then(function(res) {
    console.log("append res",res);
  })
  .catch(function(err) {
    console.error("append err",err);
  });
