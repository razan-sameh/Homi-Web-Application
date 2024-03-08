namespace API.Errors
{
    public class ApiException:ApiResponse
    {
        public ApiException(int statusCode, string messaeg = null, string details = null) : base(statusCode,messaeg){
        
        Details= details;
        }
        public string Details { get; set; }
    }
}
