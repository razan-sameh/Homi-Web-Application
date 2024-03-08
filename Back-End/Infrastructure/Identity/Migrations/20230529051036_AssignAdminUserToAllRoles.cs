using Microsoft.EntityFrameworkCore.Migrations;
using StackExchange.Redis;

#nullable disable

namespace Infrastructure.Identity.Migrations
{
    /// <inheritdoc />
    public partial class AssignAdminUserToAllRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO [AspNetUserRoles] (UserId,RoleId) SELECT '31241d08-9a08-4b0c-b6db-246d71404e6c', Id FROM [AspNetRoles]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM [AspNetUserRoles] WHERE UserId='31241d08-9a08-4b0c-b6db-246d71404e6c'");

        }
    }
}
