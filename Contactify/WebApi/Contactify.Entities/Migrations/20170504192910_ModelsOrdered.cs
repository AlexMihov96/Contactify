using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Contactify.Entities.Migrations
{
    public partial class ModelsOrdered : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Thumbnail",
                table: "Posts",
                newName: "Picture");

            migrationBuilder.AlterColumn<string>(
                name: "Message",
                table: "Comment",
                maxLength: 32767,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 32767,
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Picture",
                table: "Posts",
                newName: "Thumbnail");

            migrationBuilder.AlterColumn<string>(
                name: "Message",
                table: "Comment",
                maxLength: 32767,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 32767);
        }
    }
}
