let coin = {
  state: 0,
  flip: function () {
    if (Math.random() > 0.5) {
      this.state = 1



    } else {
      this.state = 0
    }

    /* 1. Randomly set your coin object's "state" property to be either 
       0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    coin.flip()
    if (this.state === 1) {
      return 'heads'
    } else {
      return 'tails'
    }
    /* 2. Return the string "Heads" or "Tails", depending on whether
       "this.state" is 0 or 1. */
  },
  toHTML: function () {
    coin.flip()
    let image = document.createElement('img');
    if (this.state === 1) {
      image.src = 'heads.jpg'
    } else {
      image.src = 'tails.jpg'
    }
    /* 3. Set the properties of this image element to show either face-up
       or face-down, depending on whether this.state is 0 or 1.*/
    document.body.append(image)
  }
};
function display20flips() {
  for (let index = 0; index < 20; index += 1) {
    let result = coin.toString()
    document.body.append(result)

  }
  }

  display20flips()

  function display20images() {
    for (let index = 0; index < 20; index += 1) {
     coin.toHTML()
    }

    }
    display20images()





    console.log(coin.toString())
  