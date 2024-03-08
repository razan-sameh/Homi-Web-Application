using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Identity.Migrations
{
    /// <inheritdoc />
    public partial class addAdminUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO [AspNetUsers] ([Id], [DisplayName], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'31241d08-9a08-4b0c-b6db-246d71404e6c', N'Roqaya Mohammed', N'RoqayaMohammed3@gmail.com', N'ROQAYAMOHAMMED3@GMAIL.COM', N'RoqayaMohammed3@gmail.com', N'ROQAYAMOHAMMED3@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEF7htVSxO2kIU2XIF/oW4HwDCDNqNYe7KT/luJ8JBWxB/CWTdEfPeyp+2s9qAAsOCw==', N'TKXK6DPYC46JBK6HWN7NVTXU5SYZ3LR4', N'00ff19c1-f98d-48f8-8c0e-2b3c4e79e729', NULL, 0, 0, NULL, 1, 0)");


        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM [AspNetUsers] WHERE Id = '31241d08-9a08-4b0c-b6db-246d71404e6c' ");

        }
    }
}
