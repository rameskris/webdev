//some console examples
console.log('x')
console.error("Alert")
console.warn('warning')
console.table({name:"ramesh",email:"raa@gmail.com"})
// console group starts
console.group('simple');
console.log('x')
console.error("Alert")
console.warn('warning')
console.groupEnd()
// console group ends

const styles='padding:10px;background-color:green;color:green'
console.log('%cHello World',styles)