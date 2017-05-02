using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Contactify.Entities.Migrations
{
    public partial class UpdateStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MessageHeader_User_ReceiverId",
                table: "MessageHeader");

            migrationBuilder.DropForeignKey(
                name: "FK_MessageHeader_User_SenderId",
                table: "MessageHeader");

            migrationBuilder.AddForeignKey(
                name: "FK_MessageHeader_User_ReceiverId",
                table: "MessageHeader",
                column: "ReceiverId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MessageHeader_User_SenderId",
                table: "MessageHeader",
                column: "SenderId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MessageHeader_User_ReceiverId",
                table: "MessageHeader");

            migrationBuilder.DropForeignKey(
                name: "FK_MessageHeader_User_SenderId",
                table: "MessageHeader");

            migrationBuilder.AddForeignKey(
                name: "FK_MessageHeader_User_ReceiverId",
                table: "MessageHeader",
                column: "ReceiverId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MessageHeader_User_SenderId",
                table: "MessageHeader",
                column: "SenderId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
