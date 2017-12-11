import { Action } from "@ngrx/store"

export namespace NewsFeedActions {
  export const CREATE_POST = 'CREATE_POST'
  export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
  export const CREATE_POST_FAIL = 'CREATE_POST_FAIL'
  export const GET_ALL_POSTS = 'GET_ALL_POSTS'
  export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS'
  export const GET_ALL_POSTS_FAIL = 'GET_ALL_POSTS_FAIL'


  export class CreatePostAction implements Action {
    public type: string = CREATE_POST

    constructor(public payload: any) {
    }
  }

  export class CreatePostSuccessAction implements Action {
    public type: string = CREATE_POST_SUCCESS

    constructor(public payload: any) {
    }
  }

  export class CreatePostFailAction implements Action {
    public type: string = CREATE_POST_FAIL

    constructor(public payload: any) {
    }
  }

  export class GetAllPostsAction implements Action {
    public type: string = GET_ALL_POSTS

    constructor(public payload: any) {
    }
  }
  export class GetAllPostsSuccessAction implements Action {
    public type: string = GET_ALL_POSTS_SUCCESS

    constructor(public payload: any) {
    }
  }
  export class GetAllPostsFailAction implements Action {
    public type: string = GET_ALL_POSTS_FAIL

    constructor(public payload: any) {
    }
  }

  export type Actions =
    CreatePostAction |
    CreatePostSuccessAction |
    CreatePostFailAction |
    GetAllPostsAction |
    GetAllPostsSuccessAction |
    GetAllPostsFailAction
}
