// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our pointCal function with four sets of inputs', function (assert) {
    assert.strictEqual(pointCal('A'), 4, 'Grade A');
    assert.strictEqual(pointCal('B'), 3, 'Grade B');
    assert.strictEqual(pointCal('C'), 2, 'Grade C');
    assert.strictEqual(pointCal('D'), 1, 'Grade D');
    assert.strictEqual(pointCal('F'), 0, 'Grade F');
});

QUnit.test('Testing our pointCal function with four sets of inputs', function (assert) {
    assert.strictEqual(cal(4,4,4), "4.00", 'Highest Grade');
    assert.strictEqual(cal(3,3,3), "3.00", 'Average Grade');
    assert.strictEqual(cal(4,3,3), "3.33", 'Good Grade');
    assert.strictEqual(cal(0,0,0), "0.00", 'Fail');
   
});
