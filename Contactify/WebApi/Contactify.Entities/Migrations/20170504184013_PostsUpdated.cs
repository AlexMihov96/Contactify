using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Contactify.Entities.Migrations
{
    public partial class PostsUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Posts_PostId1",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Like_Posts_PostId1",
                table: "Like");

            migrationBuilder.DropForeignKey(
                name: "FK_Share_Posts_PostId1",
                table: "Share");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Comment_CommentPostId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Like_LikePostId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Share_SharePostId",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Share",
                table: "Share");

            migrationBuilder.DropIndex(
                name: "IX_Share_PostId1",
                table: "Share");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Like",
                table: "Like");

            migrationBuilder.DropIndex(
                name: "IX_Like_PostId1",
                table: "Like");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Comment",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_PostId1",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "PostId1",
                table: "Share");

            migrationBuilder.DropColumn(
                name: "PostId1",
                table: "Like");

            migrationBuilder.DropColumn(
                name: "PostId1",
                table: "Comment");

            migrationBuilder.RenameColumn(
                name: "SharePostId",
                table: "User",
                newName: "ShareId");

            migrationBuilder.RenameColumn(
                name: "LikePostId",
                table: "User",
                newName: "LikeId");

            migrationBuilder.RenameColumn(
                name: "CommentPostId",
                table: "User",
                newName: "CommentId");

            migrationBuilder.RenameIndex(
                name: "IX_User_SharePostId",
                table: "User",
                newName: "IX_User_ShareId");

            migrationBuilder.RenameIndex(
                name: "IX_User_LikePostId",
                table: "User",
                newName: "IX_User_LikeId");

            migrationBuilder.RenameIndex(
                name: "IX_User_CommentPostId",
                table: "User",
                newName: "IX_User_CommentId");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Share",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Like",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Comment",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Share",
                table: "Share",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Like",
                table: "Like",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Comment",
                table: "Comment",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Share_PostId",
                table: "Share",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_Like_PostId",
                table: "Like",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_PostId",
                table: "Comment",
                column: "PostId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Posts_PostId",
                table: "Comment",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Like_Posts_PostId",
                table: "Like",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Share_Posts_PostId",
                table: "Share",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Comment_CommentId",
                table: "User",
                column: "CommentId",
                principalTable: "Comment",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Like_LikeId",
                table: "User",
                column: "LikeId",
                principalTable: "Like",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_User_Share_ShareId",
                table: "User",
                column: "ShareId",
                principalTable: "Share",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Posts_PostId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Like_Posts_PostId",
                table: "Like");

            migrationBuilder.DropForeignKey(
                name: "FK_Share_Posts_PostId",
                table: "Share");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Comment_CommentId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Like_LikeId",
                table: "User");

            migrationBuilder.DropForeignKey(
                name: "FK_User_Share_ShareId",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Share",
                table: "Share");

            migrationBuilder.DropIndex(
                name: "IX_Share_PostId",
                table: "Share");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Like",
                table: "Like");

            migrationBuilder.DropIndex(
                name: "IX_Like_PostId",
                table: "Like");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Comment",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_PostId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Share");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Like");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Comment");

            migrationBuilder.RenameColumn(
                name: "ShareId",
                table: "User",
                newName: "SharePostId");

            migrationBuilder.RenameColumn(
                name: "LikeId",
                table: "User",
                newName: "LikePostId");

            migrationBuilder.RenameColumn(
                name: "CommentId",
                table: "User",
                newName: "CommentPostId");

            migrationBuilder.RenameIndex(
                name: "IX_User_ShareId",
                table: "User",
                newName: "IX_User_SharePostId");

            migrationBuilder.RenameIndex(
                name: "IX_User_LikeId",
                table: "User",
                newName: "IX_User_LikePostId");

            migrationBuilder.RenameIndex(
                name: "IX_User_CommentId",
                table: "User",
                newName: "IX_User_CommentPostId");

            migrationBuilder.AddColumn<int>(
                name: "PostId1",
                table: "Share",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PostId1",
                table: "Like",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PostId1",
                table: "Comment",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Share",
                table: "Share",
                column: "PostId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Like",
                table: "Like",
                column: "PostId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Comment",
                table: "Comment",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_Share_PostId1",
                table: "Share",
                column: "PostId1");

            migrationBuilder.CreateIndex(
                name: "IX_Like_PostId1",
                table: "Like",
                column: "PostId1");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_PostId1",
                table: "Comment",
                column: "PostId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Posts_PostId1",
                table: "Comment",
                column: "PostId1",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Like_Posts_PostId1",
                table: "Like",
                column: "PostId1",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Share_Posts_PostId1",
                table: "Share",
                column: "PostId1",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

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
    }
}
