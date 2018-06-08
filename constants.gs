function TEST(param) {
  switch(param) {
    case "STOP_WEB_LOAD": return false;
    case "STOP_SQL_COMMIT": return false;
    case "STOP_SQL_EXEC": return false;
  }     
};