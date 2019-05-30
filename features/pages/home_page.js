const {Selector} = require('testcafe')

module.exports = {

    url: `${process.env.TESTCAFE_URL}`,
    
    GoogleSearch: 
    {       
        searchTextbox: function()
        {
            return Selector('.gLFyf').with({boundTestRun: testController})
        },
        searchButton: function(i) 
        {
            return Selector('.gNO89b').with({ boundTestRun: testController })
        },
        ieLinkIsPresent: function() 
        {
            return Selector('div:nth-child(2) > .rc .LC20lb').with({ boundTestRun: testController })
        }
    }
}