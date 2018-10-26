/**
 * Generic Date function 
 *
 * This function library hold generic date functionality.
 *
 * @author Martin Hilligsoe
 */

/**
 * Function that return end of month date from the input date 
 *
 * @author Martin Hilligsoe
 *
 * @param	date                            java.util.Date
 *
 * @return	endOfMonthDate                  java.util.Date
 */
function IBDateGetLastDayOfMonth(date)
{  
    var calendar = new java.util.Calendar.getInstance();  
    calendar.setTime(date);  

    calendar.add(java.util.Calendar.MONTH, 1);  
    calendar.set(java.util.Calendar.DAY_OF_MONTH, 1);  
    calendar.add(java.util.Calendar.DATE, -1);  

    return calendar.getTime();  
}

/**
 * Function that return the number of months between to dates 
 *
 * @author Martin Hilligsoe
 *
 * @param	startDate                       java.util.Date
 * @param	endDate                         java.util.Date
 *
 * @return	diffMonth                       Integer
 */
function IBDateMonthsBetween(startDate, endDate)
{  
    var startCalendar = new java.util.Calendar.getInstance();
    var endCalendar = new java.util.Calendar.getInstance();
    startCalendar.setTime(startDate);
    endCalendar.setTime(endDate);

    var diffYear = endCalendar.get(java.util.Calendar.YEAR) - startCalendar.get(java.util.Calendar.YEAR);
    var diffMonth = diffYear * 12 + endCalendar.get(java.util.Calendar.MONTH) - startCalendar.get(java.util.Calendar.MONTH);  

    return diffMonth;  
}

/**
 * Function that return truncated date from the input date 
 *
 * @author Martin Hilligsoe
 *
 * @param	date                            java.util.Date
 *
 * @return	truncated date                  java.util.Date
 */
function IBDateTruncate(date)
{     
    var calendar = new java.util.Calendar.getInstance();  
    calendar.setTime(date);  

    calendar.set(java.util.Calendar.HOUR_OF_DAY, 0);
    calendar.set(java.util.Calendar.MINUTE, 0);
    calendar.set(java.util.Calendar.SECOND, 0);
    calendar.set(java.util.Calendar.MILLISECOND, 0);  

    return calendar.getTime();  
}

/**
 * Add or substract days to a date 
 *
 * @author Martin Hilligsoe
 *
 * @param	date                            java.util.Date
 *
 * @return	changedDate                     java.util.Date
 */
function IBDateAddSubstractDaysFromDate(date, offset)
{  
    var calendar = new java.util.Calendar.getInstance();  
    calendar.setTime(date);  

    calendar.add(java.util.Calendar.DATE, offset); 

    return calendar.getTime();  
} 

/**
 * Format a date to specfic format
 * Format using java.text.SimpleDateFormat
 *
 * @author Martin Hilligsoe
 *
 * @param	date                            java.util.Date
 * @param	format                          string
 *
 * @return	formattedDate                   String
 */
function IBDateFormatDateByFormat(date, format)
{
    var formatter = new java.text.SimpleDateFormat(format);
    return formatter.format(date);
}

/**
 * Creates a date from a date string and a format
 * Format using java.text.SimpleDateFormat 
 *
 * @author Martin Hilligsoe
 *
 * @param	dateString                      string
 * @param	format                          string
 *
 * @return	date                            java.util.Date
 */
function IBDateCreateDateByFormat(date, format)
{
    var d = null;
    if (date == null)
        return null;

    if (date == "")
        return null;

    var strDt = java.lang.String("" + date);

    var formatter = new java.text.SimpleDateFormat(format);
    d = formatter.parse(strDt);

    return d;
}

/**
 * Format a date to IBA standard format dd-MM-yyyy
 *
 * @author Martin Hilligsoe
 *
 * @param	date                            java.util.Date
 *
 * @return	formattedDate                   String
 */
function IBDateFormatDate(date)
{
    return IBDateFormatDateByFormat(date, "dd-MM-yyyy");
}

/**
 * Format a date to IBA "." format dd.MM.yyyy
 *
 * @author Martin Hilligsoe
 *
 * @param	date                            java.util.Date
 *
 * @return	formattedDate                   String
 */
function IBDateFormatDateDot(date)
{
    return IBDateFormatDateByFormat(date, "dd.MM.yyyy");
}