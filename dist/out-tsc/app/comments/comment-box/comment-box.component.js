var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
export var CommentBoxComponent = (function () {
    function CommentBoxComponent(commentService) {
        this.commentService = commentService;
        this.click = new EventEmitter();
    }
    CommentBoxComponent.prototype.ngOnInit = function () {
    };
    CommentBoxComponent.prototype.ngOnChanges = function () {
    };
    CommentBoxComponent.prototype.doDelete = function (id) {
        var _this = this;
        this.commentService.deleteComment(id)
            .subscribe(function () {
            _this.commentService.getAllComments()
                .subscribe(function (comments) {
                _this.click.emit(comments);
            });
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Comment)
    ], CommentBoxComponent.prototype, "comment", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], CommentBoxComponent.prototype, "click", void 0);
    CommentBoxComponent = __decorate([
        Component({
            selector: 'app-comment-box',
            templateUrl: './comment-box.component.html',
            styleUrls: ['./comment-box.component.css']
        }), 
        __metadata('design:paramtypes', [CommentService])
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-box/comment-box.component.js.map