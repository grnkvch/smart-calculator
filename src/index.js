class SmartCalculator {
  constructor(initialValue) {
      this.exp = [];
      if (initialValue) this.exp[0] = initialValue;
  }

  add(number) {
    this.exp.push('+');
    this.exp.push(number);
    return this;
  }
  
  subtract(number) {
    this.exp.push('-');
    this.exp.push(number);
    return this;
  }

  multiply(number) {
    this.exp.push('*');
    this.exp.push(number);
    return this;
  }

  devide(number) {
    this.exp.push('/');
    this.exp.push(number);
    return this;
  }

  pow(number) {
    this.exp.push('**');
    this.exp.push(number);
    return this;
  }


  toString() {
  var str = 'return '+this.exp.join(' ')+';';
  var res = new Function('',str);
  return res();
  }
}

module.exports = SmartCalculator;
