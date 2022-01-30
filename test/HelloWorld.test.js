const HelloWorld = artifacts.require("HelloWorld");
contract('HelloWorld', (accounts) => {
    let helloWorld;
    before(async () => {
        helloWorld = await HelloWorld.deployed()
    
      })
    
      it('It should return firstValue', async () => {
        const defaultValue = await helloWorld.val();
        assert.equal(defaultValue, "firstValue")
      })

      it('It should set HelloWorld to Iron Man',async()=>{
          await helloWorld.setVal("Iron Man",{from:accounts[0]})
          const currentVal = await helloWorld.val()
          assert.equal(currentVal,"Iron Man")
      })
      
});