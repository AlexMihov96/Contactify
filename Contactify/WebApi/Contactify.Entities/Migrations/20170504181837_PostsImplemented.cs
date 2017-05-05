using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Contactify.Entities.Migrations
{
    public partial class PostsImplemented : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CommentPostId",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LikePostId",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SharePostId",
                table: "User",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CommentCount = table.Column<int>(nullable: false),
                    CreationDate = table.Column<DateTime>(type: "Date", nullable: false),
                    LikeCount = table.Column<int>(nullable: false),
                    Message = table.Column<string>(maxLength: 32767, nullable: false),
                    ShareCount = table.Column<int>(nullable: false),
                    Thumbnail = table.Column<string>(maxLength: 1000, nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    VideoUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comment",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false),
                    Message = table.Column<string>(maxLength: 32767, nullable: true),
                    PostId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Comment_Posts_PostId1",
                        column: x => x.PostId1,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Like",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false),
                    PostId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Like", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Like_Posts_PostId1",
                        column: x => x.PostId1,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Share",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false),
                    PostId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Share", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Share_Posts_PostId1",
                        column: x => x.PostId1,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_User_CommentPostId",
                table: "User",
                column: "CommentPostId");

            migrationBuilder.CreateIndex(
                name: "IX_User_LikePostId",
                table: "User",
                column: "LikePostId");

            migrationBuilder.CreateIndex(
                name: "IX_User_SharePostId",
                table: "User",
                column: "SharePostId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_PostId1",
                table: "Comment",
                column: "PostId1");

            migrationBuilder.CreateIndex(
                name: "IX_Like_PostId1",
                table: "Like",
                column: "PostId1");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_UserId",
                table: "Posts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Share_PostId1",
                table: "Share",
                column: "PostId1");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Comment_CommentPostId",
                table: "User",
                column: "CommentPostId",
                principalTable: "Comment",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Like_LikePostId",
                table: "User",
                column: "LikePostId",
                principalTable: "Like",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Share_SharePostId",
                table: "User",
                column: "SharePostId",
                principalTable: "Share",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_Comment_CommentPostId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Like_LikePostId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Share_SharePostId",
                table: "User");

            migrationBuilder.DropTable(
                name: "Comment");

            migrationBuilder.DropTable(
                name: "Like");

            migrationBuilder.DropTable(
                name: "Share");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_User_CommentPostId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_LikePostId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_SharePostId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "CommentPostId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "LikePostId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SharePostId",
                table: "User");
        }
    }
}
