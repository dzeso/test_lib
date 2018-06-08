function runTest_test() {   
  runBlockTests(['lengthTest',
                 'isOnlineTestBloked']);
}

function lengthTest_test() {
  return runGroupTests(
    {name: 'lengthTest',
     should: [3,0,undefined, null],
     data: ['123','',undefined, null]
    });
}

function isOnlineTestBloked_test() {
  return runGroupTests(
    {name: 'isOnlineTestBloked',
     should: [{message: 'skiped by TEST("STOP_WEB_LOAD")', isBloked: TEST("STOP_WEB_LOAD")},
              {message: 'skiped by ', isBloked: false},
              {message: 'skiped by undefined', isBloked: false},
              {message: 'skiped by TEST("STOP_SQL_EXEC")', isBloked: TEST("STOP_SQL_EXEC")},
              {message: 'skiped by null', isBloked: false}],
     data: ['TEST("STOP_WEB_LOAD")','',undefined, 'TEST("STOP_SQL_EXEC")', null],
     compare: [
       "pattern.isBloked === result.isBloked",
       "pattern.message === result.message"
     ]
    });
}