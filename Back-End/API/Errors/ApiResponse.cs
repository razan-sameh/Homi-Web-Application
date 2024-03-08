namespace API.Errors
{
    public class ApiResponse
    {

        public ApiResponse( int statusCode,string messaeg=null)
        {
            StatusCode= statusCode;
            Messaeg = messaeg ?? GetDefaultMessageForStatusCode(statusCode);
        }
        public int StatusCode { get; set; }
        public string Messaeg { get;set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you have made",
                401 => "Authorized you are not",
                404 => "Response found it is not",
                500 => "Server error occured",
                _ => null

            };
        
        }
    }
}
