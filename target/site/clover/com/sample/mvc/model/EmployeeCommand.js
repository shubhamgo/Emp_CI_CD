var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":52,"id":38,"methods":[{"el":16,"sc":2,"sl":13},{"el":30,"sc":2,"sl":28},{"el":34,"sc":2,"sl":32},{"el":38,"sc":2,"sl":36},{"el":42,"sc":2,"sl":40},{"el":46,"sc":2,"sl":44},{"el":50,"sc":2,"sl":48}],"name":"EmployeeCommand","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":28},{"sl":44}],"name":"testGetEmployeeById","pass":true,"statements":[{"sl":29},{"sl":45}]},"test_8":{"methods":[{"sl":13}],"name":"testListContacts","pass":true,"statements":[{"sl":14}]},"test_9":{"methods":[{"sl":36}],"name":"testGetEmployeeById","pass":true,"statements":[{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [8], [8], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [1], [], [], [], [], [], [], [9], [9], [], [], [], [], [], [], [1], [1], [], [], [], [], [], [], []]
